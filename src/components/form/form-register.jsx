
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png';

// Fungsi untuk hash password (menggunakan Base64 sebagai contoh sederhana)
const hashPassword = (password) => {
    return btoa(password); // Encode password dalam Base64 (untuk demo, lebih baik pakai bcrypt di backend)
};

const FormRegister = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        countryCode: '+62',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.email || !formData.phone || !formData.password) {
            alert("Semua field harus diisi!");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok!");
            return;
        }

        // Ambil data pengguna yang sudah terdaftar
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Cek apakah email sudah terdaftar
        if (users.some(user => user.email === formData.email)) {
            alert("Email sudah terdaftar! Silakan gunakan email lain atau login.");
            return;
        }

        // Simpan data dengan password yang di-hash
        users.push({
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            countryCode: formData.countryCode,
            password: hashPassword(formData.password) // Simpan password yang sudah di-hash
        });

        localStorage.setItem('users', JSON.stringify(users));

        alert("Pendaftaran berhasil!");
        navigate("/home"); // Navigasi ke halaman home
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-[10px]'>
                        <h3 className="text-center">Pendaftaran Akun</h3>
                        <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>

                    <div>
                        <label htmlFor="fullname" className="text-input">Nama Lengkap <span className='text-red-600'>*</span></label>
                        <input type="text" name="fullname" className='input-form' id="fullname" value={formData.fullname} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-input">E-Mail <span className='text-red-600'>*</span></label>
                        <input type="email" name="email" className='input-form' id="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="phone" className="text-input">No.Hp <span className='text-red-600'>*</span></label>
                        <div className="flex gap-6">
                            <select name="countryCode" id="country" value={formData.countryCode} onChange={handleChange}>
                                <option value="+62">+62 (Indonesia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+60">+60 (Malaysia)</option>
                            </select>
                            <input type="tel" name="phone" className='input-form' id="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='relative'>
                        <label htmlFor="password" className="text-input">Kata Sandi <span className='text-red-600'>*</span></label>
                        <input type="password" name="password" id="password" className="input-form pr-10" value={formData.password} onChange={handleChange} />
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>

                    <div className="relative">
                        <label htmlFor="confirmPassword" className="text-input">Konfirmasi Kata Sandi <span className='text-red-600'>*</span></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="input-form pr-10" value={formData.confirmPassword} onChange={handleChange} />
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>

                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>

                    <button type="submit" className="btn-register text-button">Daftar</button>

                    <p className="text-input text-center">atau</p>

                    <a href="/login" className="btn-login text-button text-center">Masuk</a>

                    <button type="button" className="btn-google">
                        <div className="flex justify-center gap-2 px-[26px] py-2">
                            <img src={logoGoogle} alt="logo-google" />
                            <p className="text-button text-slate-600">Masuk dengan Google</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormRegister;

