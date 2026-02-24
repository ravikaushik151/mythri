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

// Define the recipient email address
$to_email = "enquiry@mythribuilders.co.in"; // **CHANGE THIS TO YOUR ACTUAL EMAIL ADDRESS**
$subject = "New Career Application - Mythri Builders Website";
$from_email = "noreply@mythribuilders.com"; // **CHANGE THIS to a valid sender email**

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Gather form data
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : 'N/A';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : 'N/A';
    $city = isset($_POST['city']) ? htmlspecialchars(trim($_POST['city'])) : 'N/A';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : 'N/A';
    // Note: 'post1' field seems unused in the form, using a placeholder/default
    $post = 'Sales Manager';
    $experience = isset($_POST['experience']) ? htmlspecialchars(trim($_POST['experience'])) : 'N/A';
    $message = isset($_POST['msg']) ? htmlspecialchars(trim($_POST['msg'])) : 'No Description';

    // 2. Build the email body
    $email_body = "You have received a new career application.\n\n";
    $email_body .= "Applicant Details:\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "City: $city\n";
    $email_body .= "Experience: $experience\n";
    $email_body .= "Description:\n$message\n";

    // 3. Handle File Attachment
    $file_attached = false;
    $attachment = '';
    $attachment_name = '';
    $attachment_type = '';

    if (isset($_FILES['fileatt']) && $_FILES['fileatt']['error'] == UPLOAD_ERR_OK) {
        $file_attached = true;

        // Get file details
        $tmp_name = $_FILES['fileatt']['tmp_name'];
        $attachment_name = basename($_FILES['fileatt']['name']);
        $attachment_type = $_FILES['fileatt']['type'];

        // Read the file content
        $handle = fopen($tmp_name, "rb");
        $content = fread($handle, filesize($tmp_name));
        fclose($handle);

        // Base64 encode the content for email
        $encoded_content = chunk_split(base64_encode($content));
    }

    // 4. Set Email Headers and Boundary for attachment
    $mime_boundary = "----=_Boundary_" . md5(time());

    $headers = "From: $from_email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$mime_boundary\"\r\n";

    // Start of the multipart message
    $email_message = "--$mime_boundary\r\n";

    // Add the text part of the email
    $email_message .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $email_message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $email_message .= $email_body . "\r\n\r\n";

    // Add the attachment part if file exists
    if ($file_attached) {
        $email_message .= "--$mime_boundary\r\n";
        $email_message .= "Content-Type: $attachment_type; name=\"$attachment_name\"\r\n";
        $email_message .= "Content-Transfer-Encoding: base64\r\n";
        $email_message .= "Content-Disposition: attachment; filename=\"$attachment_name\"\r\n\r\n";
        $email_message .= $encoded_content . "\r\n\r\n";
    }

    // End of the multipart message
    $email_message .= "--$mime_boundary--\r\n";

    // 5. Send the email
    if (mail($to_email, $subject, $email_message, $headers)) {
        // Success response
        http_response_code(200);
        echo json_encode(["message" => "Thank you! Your application has been sent successfully."]);
    } else {
        // Failure response
        http_response_code(500);
        echo json_encode(["message" => "Error sending application. The mail server could not process the request."]);
    }
} else {
    // Not a POST request
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed. Only POST requests are accepted."]);
}