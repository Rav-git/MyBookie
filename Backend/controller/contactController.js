import Contact from "../model/Contact.js";

// Create a new contact form submission
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    // Save to database
    await contact.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: contact
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit your message. Please try again later.",
      error: error.message
    });
  }
};

// Get all contact form submissions (admin function)
export const getAllContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submissions",
      error: error.message
    });
  }
}; 