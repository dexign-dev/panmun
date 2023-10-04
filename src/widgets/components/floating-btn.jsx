import React from 'react';

export function FloatingButton() {
    const isMobile = window.innerWidth <= 768;
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
                bottom: isMobile ? '16px' : '30px',  // 모바일 환경일 경우 15px, 아닐 경우 30px
                right: isMobile ? '16px' : '30px',  // 모바일 환경일 경우 20px, 아닐 경우 40px
                background: `url('/img/floating_contact.png') no-repeat center`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: isMobile ? '40px' : '70px',  // 모바일 환경일 경우 40px, 아닐 경우 80px
                height: isMobile ? '40px' : '80px',  // 모바일 환경일 경우 45px, 아닐 경우 90px
                border: 'none',
                cursor: 'pointer',
            }}
        />
    );
}

export default FloatingButton;
