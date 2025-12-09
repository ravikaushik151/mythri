<?php
// Set the content type to JSON for the response
header("Access-Control-Allow-Origin: *"); // or specify your domain instead of *
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

// Main recipient
$adminEmail = "info@imsolutions.mobi";

// Additional recipients (each will get their own mail)
$additionalRecipients = ['mythribuilders1@gmail.com', 'enquiry@mythribuilders.co.in'];
//$additionalRecipients = ['ravi.k@imsolutions.mobi','lokesh@imsolutions.mobi']; 

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect and sanitize POST data
    $name    = isset($_POST['name'])    ? strip_tags(trim($_POST['name']))    : '';
    $email   = isset($_POST['email'])   ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
    $phone   = isset($_POST['phone'])   ? strip_tags(trim($_POST['phone']))   : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    $project = isset($_POST['project']) ? strip_tags(trim($_POST['project'])) : ''; // ✅ optional project

    // Basic validation
    if (empty($name) || empty($email) || empty($phone)) {
        echo "Error: All fields are required";
        exit;
    }

    if (!$email) {
        echo "Error: Invalid email address";
        exit;
    }

    // Email subject
    $subject = "Enquiry from Mythri Builders Website";

    // Base body
    $body = "
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
    ";

    // ✅ Add project to body only if it is provided
    if (!empty($project)) {
        $body .= "<p><strong>Project:</strong> $project</p>";
    }

    // Add message last
    $body .= "<p><strong>Message:</strong> $message</p>";

    // Common headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply <noreply@mythribuilders.com>" . "\r\n";

    // Prepare all recipients in one array
    $recipients   = array_merge([$adminEmail], $additionalRecipients);
    $successCount = 0;

    // Send separate email to each recipient
    foreach ($recipients as $recipient) {
        if (mail($recipient, $subject, $body, $headers, "-fnoreply@mythribuilders.com")) {
            $successCount++;
        }
    }

    // Final response
    if ($successCount === count($recipients)) {
        echo "Email sent successfully to all recipients";
    } else {
        echo "Error: Some emails could not be sent ($successCount of " . count($recipients) . ")";
    }
} else {
    echo "Invalid request";
}