import DOMPurify from 'dompurify';
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const Modal = ({ description, x, y, description2 }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef && codeRef.current) {
            const sanitizedDescription = DOMPurify.sanitize(description);
            codeRef.current.innerHTML = sanitizedDescription;
            hljs.highlightElement(codeRef.current);
        }
    }, [description]);

    return (
        <div className="modal" style={{position: 'absolute', left: x, top: y}}>
            <div className="modal-content">
                <pre>
                    <code ref={codeRef} className="css">
                        {/* content will be inserted via innerHTML */}
                    </code>
                </pre>
            </div>    
        </div>
    );
};

export default Modal;


