// Enhancement script for portfolio - Add file viewer functionality
// This script adds the ability to view and download original files (DOCX, PDF)

// Files configuration
const filesData = [
    {
        id: "Tuan1",
        name: "Tuan1_NguyenDucHuy.docx",
        size: "541.5 KB",
        type: "docx",
        icon: "📄",
        path: "../New folder/Tuan1_NguyenDucHuy.docx",
        description: "Bài tập tuần 1"
    },
    {
        id: "Tuan2",
        name: "Tuan2_NguyenDucHuy.docx",
        size: "25.88 KB",
        type: "docx",
        icon: "📄",
        path: "../New folder/Tuan2_NguyenDucHuy.docx",
        description: "Bài tập tuần 2"
    },
    {
        id: "Tuan3",
        name: "Tuan3_NguyenDucHuy.pdf",
        size: "1765.65 KB",
        type: "pdf",
        icon: "📕",
        path: "../New folder/Tuan3_NguyenDucHuy.pdf",
        description: "Bài tập tuần 3"
    },
    {
        id: "Tuan4",
        name: "Tuan4_NguyenDucHuy.docx",
        size: "1010.19 KB",
        type: "docx",
        icon: "📄",
        path: "../New folder/Tuan4_NguyenDucHuy.docx",
        description: "Bài tập tuần 4"
    },
    {
        id: "Tuan5",
        name: "Tuan5_NguyenDucHuy.docx",
        size: "18.07 KB",
        type: "docx",
        icon: "📄",
        path: "../New folder/Tuan5_NguyenDucHuy.docx",
        description: "Bài tập tuần 5"
    },
    {
        id: "Tuan6",
        name: "Tuan6_NguyenDucHuy.docx",
        size: "20.22 KB",
        type: "docx",
        icon: "📄",
        path: "../New folder/Tuan6_NguyenDucHuy.docx",
        description: "Bài tập tuần 6"
    }
];

// Create HTML for file section
function createFileViewer() {
    const html = `
    <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 30px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
        <h2 style="font-size: 1.8em; margin-bottom: 25px; color: #333;">📁 Xem File Gốc</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
            ${filesData.map(file => `
                <div style="border: 2px solid #e0e0e0; border-radius: 10px; overflow: hidden; transition: all 0.3s; cursor: pointer;"
                     onmouseover="this.style.borderColor='#667eea'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.15)'; this.style.transform='translateY(-5px)';"
                     onmouseout="this.style.borderColor='#e0e0e0'; this.style.boxShadow='none'; this.style.transform='translateY(0)';">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2.5em;">${file.icon}</div>
                        <div style="flex: 1;">
                            <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 5px;">${file.name}</div>
                            <div style="font-size: 0.85em; opacity: 0.9;">${file.size}</div>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                            <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                                <div style="color: #666; font-weight: 500; font-size: 0.85em;">Loại file</div>
                                <div style="color: #333; margin-top: 5px; font-weight: bold;">${file.type.toUpperCase()}</div>
                            </div>
                            <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                                <div style="color: #666; font-weight: 500; font-size: 0.85em;">Kích thước</div>
                                <div style="color: #333; margin-top: 5px; font-weight: bold;">${file.size}</div>
                            </div>
                        </div>
                        <p style="margin-bottom: 15px; color: #666;">${file.description}</p>
                        <div style="display: flex; gap: 10px;">
                            <button onclick="downloadFile('${file.path}', '${file.name}')" 
                                    style="flex: 1; padding: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 500; transition: all 0.3s;"
                                    onmouseover="this.style.boxShadow='0 6px 15px rgba(102, 126, 234, 0.4)'; this.style.transform='translateY(-2px)';"
                                    onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';">
                                📥 Tải về
                            </button>
                            <button onclick="openFile('${file.path}', '${file.name}')" 
                                    style="flex: 1; padding: 10px; background: #4caf50; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 500; transition: all 0.3s;"
                                    onmouseover="this.style.boxShadow='0 6px 15px rgba(76, 175, 80, 0.4)'; this.style.transform='translateY(-2px)';"
                                    onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';">
                                👁️ Mở
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    `;
    return html;
}

// Download file function
function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
    showNotification(`📥 Đang tải ${fileName}...`, 'success');
}

// Open file in new tab
function openFile(filePath, fileName) {
    window.open(filePath, '_blank');
    showNotification(`👁️ Mở ${fileName}...`, 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        background: ${type === 'success' ? '#4caf50' : '#2196F3'};
        color: white;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add file viewer section to the page
    const container = document.querySelector('main') || document.querySelector('.container') || document.body;
    const fileViewer = document.createElement('div');
    fileViewer.innerHTML = createFileViewer();
    container.appendChild(fileViewer.firstElementChild);
    
    // Add button to toolbar if exists
    const toolbar = document.querySelector('.toolbar');
    if (toolbar) {
        const button = document.createElement('button');
        button.className = 'btn btn-secondary';
        button.textContent = '📁 Xem file gốc';
        button.onclick = function() {
            const fileSection = document.querySelector('[style*="📁 Xem File Gốc"]') || document.querySelector('h2:contains("📁 Xem File Gốc")');
            if (fileSection) {
                fileSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
        toolbar.appendChild(button);
    }
});
