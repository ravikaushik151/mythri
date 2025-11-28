// app/dashboard/page.jsx
'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from "next/dynamic";
import { addPost, editPost, deletePost } from './actions';
import Link from 'next/link';

// Load Markdown Editor Dynamically (No SSR)
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

// Dynamically load jQuery + DataTables only on client
let $, DataTable;

const loadJQueryAndDataTable = async () => {
    if (typeof window !== 'undefined') {
        const jqueryModule = await import('jquery');
        $ = jqueryModule.default;
        window.$ = $;
        window.jQuery = $;

        await import('datatables.net-bs5');
        DataTable = (await import('datatables.net')).default;
    }
};

const Dashboard = ({ posts }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const [form, setForm] = useState({
        slug: '',
        title: '',
        h1: '',
        meta_title: '',
        description: '',
        image: '',
        excerpt: '',
        content: '',
        keywords: '',
        category: 'real estate',
        date: new Date().toISOString().split('T')[0],
    });

    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    // Initialize DataTable
    useEffect(() => {
        loadJQueryAndDataTable().then(() => {
            if (tableRef.current && $) {
                if (dataTableRef.current) {
                    dataTableRef.current.destroy();
                }
                dataTableRef.current = $(tableRef.current).DataTable({
                    pageLength: 10,
                    responsive: true,
                    language: { search: 'Filter:' },
                });
            }
        });

        return () => {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
            }
        };
    }, [posts]);

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        const res = await fetch('/dashboard/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            const { url } = await res.json();
            setForm({ ...form, image: url });
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (editingIndex !== null) {
            formData.append('index', editingIndex);
            await editPost(formData);
            setEditingIndex(null);
        } else {
            await addPost(formData);
        }

        // Reset form
        setForm({
            slug: '',
            title: '',
            h1: '',
            meta_title: '',
            description: '',
            image: '',
            excerpt: '',
            content: '',
            keywords: '',
            category: 'real estate',
            date: new Date().toISOString().split('T')[0],
        });

        setShowForm(false);
    };

    const handleEdit = (post, index) => {
        setForm(post);
        setEditingIndex(index);
        setShowForm(true);
    };

    return (
        <>
            <div className="header-section" style={{ backgroundColor: '#1a1a1a', padding: '150px 0', color: 'white' }}>
                <div className="container text-center">
                    <p className="fs-1 mb-3 text-uppercase">Blog Posts Dashboard</p>
                    <p className="fs-6">
                        <Link className="text-white text-decoration-none" href="/">Home</Link> / Blog Posts Dashboard
                    </p>
                </div>
            </div>

            <div className="container py-4">

                <button
                    className="btn btn-primary mb-3"
                    onClick={() => {
                        setShowForm(true);
                        setEditingIndex(null);
                        setForm({
                            slug: '',
                            title: '',
                            h1: '',
                            meta_title: '',
                            description: '',
                            image: '',
                            excerpt: '',
                            content: '',
                            keywords: '',
                            category: 'real estate',
                            date: new Date().toISOString().split('T')[0],
                        });
                    }}
                >
                    + Add New Post
                </button>

                {/* FORM */}
                {showForm && (
                    <div className="card shadow-sm p-4 mb-4 border-0">
                        <h4 className="fw-bold mb-3 d-flex align-items-center">
                            {editingIndex !== null ? (
                                <>
                                    ✏️ Edit Post
                                </>
                            ) : (
                                <>
                                    ➕ Add New Post
                                </>
                            )}
                        </h4>

                        <form onSubmit={handleSave}>

                            <div className="row">
                                <div className="col-md-12">

                                    {/* Slug */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Slug</label>
                                        <input
                                            className="form-control"
                                            placeholder="post-slug-example"
                                            value={form.slug}
                                            onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Title</label>
                                        <input
                                            className="form-control"
                                            placeholder="Enter blog title here"
                                            value={form.title}
                                            onChange={(e) =>
                                                setForm({ ...form, title: e.target.value })
                                            }
                                            required
                                        />
                                    </div>

                                    {/* H1 */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">H1 Heading</label>
                                        <input
                                            className="form-control"
                                            placeholder="Blog H1 headline"
                                            value={form.h1}
                                            onChange={(e) =>
                                                setForm({ ...form, h1: e.target.value })
                                            }
                                            required
                                        />
                                    </div>

                                    {/* Meta Title */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Meta Title</label>
                                        <input
                                            className="form-control"
                                            placeholder="SEO meta title"
                                            value={form.meta_title}
                                            onChange={(e) =>
                                                setForm({ ...form, meta_title: e.target.value })
                                            }
                                        />
                                    </div>

                                    {/* Meta Description */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Meta Description</label>
                                        <textarea
                                            rows="3"
                                            className="form-control"
                                            placeholder="SEO meta description..."
                                            value={form.description}
                                            onChange={(e) =>
                                                setForm({ ...form, description: e.target.value })
                                            }
                                        ></textarea>
                                    </div>

                                    {/* Excerpt */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Excerpt</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="Short summary shown on blog listing"
                                            value={form.excerpt}
                                            onChange={(e) =>
                                                setForm({ ...form, excerpt: e.target.value })
                                            }
                                            required
                                        />
                                    </div>

                                    {/* Date */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Publish Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={form.date}
                                            onChange={(e) =>
                                                setForm({ ...form, date: e.target.value })
                                            }
                                        />
                                    </div>

                                    {/* Markdown Editor */}
                                    <div className="mb-3" data-color-mode="light">
                                        <label className="form-label fw-semibold">Content Editor</label>
                                        <MDEditor
                                            value={form.content}
                                            onChange={(value) =>
                                                setForm({ ...form, content: value })
                                            }
                                            height={250}
                                        />
                                    </div>

                                    {/* Keywords */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Keywords</label>
                                        <input
                                            className="form-control"
                                            placeholder="keyword1, keyword2, keyword3"
                                            value={form.keywords}
                                            onChange={(e) =>
                                                setForm({ ...form, keywords: e.target.value })
                                            }
                                        />
                                    </div>

                                    {/* Category */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Category</label>
                                        <select
                                            className="form-select"
                                            value={form.category}
                                            onChange={(e) =>
                                                setForm({ ...form, category: e.target.value })
                                            }
                                        >
                                            <option value="real estate">Real Estate</option>
                                        </select>
                                    </div>

                                    {/* Image Upload */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Upload Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                        {form.image ? (
                                            <img
                                                src={form.image}
                                                alt="Preview"
                                                className="mt-2 img-thumbnail"
                                                width="120"
                                            />
                                        ) : null}

                                    </div>

                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex gap-2 mt-3">
                                <button type="submit" className="btn btn-success px-4">
                                    Save Post
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary px-4"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                )}


                {/* POSTS TABLE */}
                <div className="card">
                    <div className="card-body">
                        <table ref={tableRef} className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Slug</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.title}</td>
                                        <td>{post.slug}</td>
                                        <td>{post.date}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(post, index)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => deletePost(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    );
};

// SERVER COMPONENT
export default async function Page() {
    const { posts } = await import('../data/posts');
    return <Dashboard posts={posts} />;
}