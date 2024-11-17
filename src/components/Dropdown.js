import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggleDropdown}>
                {isOpen ? 'סגור' : 'פתח תפריט'}
            </button>
            {isOpen && (
                <ul>
                    <li>אפשרות 1</li>
                    <li>אפשרות 2</li>
                    <li>אפשרות 3</li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
