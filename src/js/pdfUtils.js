/**
 * Generates a professional PDF document from text content
 * @param {string} text - The content to convert to PDF
 * @param {string} [filename="document.pdf"] - Output filename
 * @returns {Promise<boolean>} - True if successful, false if failed
 */
export async function downloadAsPDF(text, filename = "document.pdf") {
    // Validate input
    if (!text || typeof text !== 'string') {
        showErrorNotification('Invalid content for PDF generation');
        return false;
    }

    try {
        // Configuration constants
        const DOC_CONFIG = {
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            margins: {
                top: 15,
                right: 15,
                bottom: 25,
                left: 15
            }
        };

        const TYPOGRAPHY = {
            font: 'helvetica',
            style: 'normal',
            size: 11,
            color: [40, 40, 40],
            lineHeight: 7,
            paragraphSpacing: 4
        };

        // Dynamically import jsPDF
        const { jsPDF } = await import('jspdf');
        
        // Initialize document
        const doc = new jsPDF(DOC_CONFIG);

        // Apply typography settings
        doc.setFont(TYPOGRAPHY.font, TYPOGRAPHY.style);
        doc.setFontSize(TYPOGRAPHY.size);
        doc.setTextColor(...TYPOGRAPHY.color);
        doc.setLineHeightFactor(1.5);

        // Calculate available width
        const maxWidth = doc.internal.pageSize.getWidth() - 
                        (DOC_CONFIG.margins.left + DOC_CONFIG.margins.right);
        
        let yPos = DOC_CONFIG.margins.top;

        // Process content
        const paragraphs = text.split('\n')
                              .filter(p => p.trim().length > 0)
                              .map(p => p.trim());

        for (const paragraph of paragraphs) {
            const lines = doc.splitTextToSize(paragraph, maxWidth);
            
            for (const line of lines) {
                // Check for page break
                if (yPos > doc.internal.pageSize.getHeight() - DOC_CONFIG.margins.bottom) {
                    doc.addPage();
                    yPos = DOC_CONFIG.margins.top;
                }
                
                doc.text(line, DOC_CONFIG.margins.left, yPos);
                yPos += TYPOGRAPHY.lineHeight;
            }
            
            yPos += TYPOGRAPHY.paragraphSpacing;
        }

        // Add professional footer
        addDocumentFooter(doc, DOC_CONFIG.margins.left);
        
        // Save PDF
        doc.save(filename);
        return true;
        
    } catch (error) {
        console.error('PDF generation error:', error);
        showErrorNotification(`PDF generation failed: ${error.message}`);
        return false;
    }
}

/**
 * Adds a professional footer to the document
 * @param {jsPDF} doc - The PDF document instance
 * @param {number} margin - Left margin position
 */
function addDocumentFooter(doc, margin) {
    const footerConfig = {
        text: `Generated on ${new Date().toLocaleDateString()}`,
        fontSize: 9,
        color: [100, 100, 100],
        position: doc.internal.pageSize.getHeight() - 10
    };

    doc.setFontSize(footerConfig.fontSize);
    doc.setTextColor(...footerConfig.color);
    doc.text(footerConfig.text, margin, footerConfig.position);
}

/**
 * Displays error notification to user
 * @param {string} message - Error message to display
 */
function showErrorNotification(message) {
    try {
        if (typeof chrome !== 'undefined' && chrome.notifications) {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icons/icon48.png',
                title: 'PDF Export Error',
                message: message.substring(0, 150) // Limit message length
            });
        } else {
            alert(message.substring(0, 500)); // Fallback with longer message
        }
    } catch (err) {
        console.error('Error notification failed:', err);
    }
}