// src/pages/profile/UserDropdown.jsx
import React, { useState, useEffect, useRef } from 'react';

const UserDropdown = ({ student, setActiveTab, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // បិទ Dropdown នៅពេលចុចខាងក្រៅ
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ប្រសិនបើគ្មាន student ទេ មិនបង្ហាញអ្វីទាំងអស់
  if (!student) return null;

  const displayName = student.nameKh || student.nameEn || student.name || 'សិស្ស';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* ប៊ូតុងចុចបើក Dropdown */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-xs">
          {initial}
        </div>
        <span className="text-gray-700 dark:text-gray-200 font-medium text-sm max-w-[120px] truncate">
          {displayName}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ផ្ទាំង Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden py-1">
          {/* ព័ត៌មានអ្នកប្រើប្រាស់ */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <p className="font-bold text-gray-900 dark:text-white truncate">{displayName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              ID: {student.id || 'STU001'} {student.grade ? `• ${student.grade}` : ''}
            </p>
          </div>

          {/* ជម្រើសម៉ឺនុយ */}
          <div className="py-1">
            {/* 1. My Grades */}
            <button
              type="button"
              onClick={() => { setActiveTab('my-grades'); setIsOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors text-left cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6V7m4 10v-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>ពិន្ទុរបស់ខ្ញុំ</span>
            </button>

            {/* 2. Profile */}
            <button
              type="button"
              onClick={() => { setActiveTab('profile'); setIsOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors text-left cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>ព័ត៌មានផ្ទាល់ខ្លួន</span>
            </button>

            {/* 3. Change Password */}
            <button
              type="button"
              onClick={() => { setActiveTab('change-password'); setIsOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors text-left cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>ផ្លាស់ប្តូរពាក្យសម្ងាត់</span>
            </button>

            {/* 4. Logout */}
            <div className="border-t border-gray-100 dark:border-gray-700 mt-1 pt-1">
              <button
                type="button"
                onClick={() => { if (typeof onLogout === 'function') onLogout(); setIsOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>ចាកចេញ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
