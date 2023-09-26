import React from 'react';

export function FloatingButton() {
    const handleClick = () => {
        const target = document.getElementById('contactUsSection');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <button 
            onClick={handleClick} 
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '60px',
                background: `url('/public/img/floating.png') no-repeat center`,
                backgroundSize: 'cover',
                width: '60px',  // 원하는 크기로 조절 가능
                height: '60px',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
        />
    );
}

export default FloatingButton;
