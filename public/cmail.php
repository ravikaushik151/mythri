<?php
header('Content-Type: text/plain');

// ====== CONFIG ======
$adminEmail = "info@imsolutions.mobi";  // Main recipient
$additionalRecipients = ['ravi.k@imsolutions.mobi','lokesh@imsolutions.mobi']; // Others who should also get a copy
// ====================

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect and sanitize POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Basic validation
    if (empty($name) || empty($email) || empty($phone)) {
        echo "Error: All fields are required";
        exit;
    }

    if (!$email) {
        echo "Error: Invalid email address";
        exit;
    }

    // Email subject and body
    $subject = "New Channel Partner Request";
    $body = "
        <h2>New Channel Partner Request</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong> $message</p>
        <hr />
        <p>This message was sent via the Channel Partner form on your website.</p>
    ";

    // Common headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply <noreply@earagroup.com>" . "\r\n";

    // Merge all recipients
    $recipients = array_merge([$adminEmail], $additionalRecipients);
    $sentCount = 0;

    // Send separate mail to each recipient
    foreach ($recipients as $recipient) {
        if (mail($recipient, $subject, $body, $headers, "-fnoreply@earagroup.com")) {
            $sentCount++;
        }
    }

    // Response
    if ($sentCount === count($recipients)) {
        echo "Email sent successfully to all recipients";
    } else {
        echo "Error: Some emails could not be sent ($sentCount of " . count($recipients) . ")";
    }

} else {
    echo "Invalid request";
}
?>
