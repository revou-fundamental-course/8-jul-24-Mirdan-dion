// script.js

// Fungsi untuk menghitung BMI
function calculateBMI() {
    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke meter
    const bmi = (weight / (height * height)).toFixed(2);

    // Tentukan kategori BMI berdasarkan nilai BMI
    let explanation = "";
    if (bmi < 18.5) {
        explanation = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        explanation = "Normal (Ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        explanation = "Kelebihan berat badan";
    } else if (bmi >= 30.0) {
        explanation = "Kegemukan (Obesitas)";
    }

    // Tampilkan hasil BMI dan penjelasannya
    document.getElementById('bmiResult').innerText = `BMI Anda: ${bmi}`;
    document.getElementById('bmiExplanation').innerText = explanation;
}

// Fungsi untuk mereset form
function resetForm() {
    // Reset nilai input ke default
    document.getElementById('gender').value = "male";
    document.getElementById('age').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('bmiResult').innerText = "";
    document.getElementById('bmiExplanation').innerText = "";
}

// Fungsi untuk mendownload hasil BMI
function downloadResult() {
    // Ambil hasil BMI dan penjelasan
    const bmiResult = document.getElementById('bmiResult').innerText;
    const bmiExplanation = document.getElementById('bmiExplanation').innerText;
    const data = `Hasil BMI: ${bmiResult}\n${bmiExplanation}`;
    
    // Buat file teks dan download
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hasil_bmi.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Fungsi untuk konsultasi offline
function consultationOffline() {
    // Redirect ke URL konsultasi offline
    window.location.href = 'https://pkmambalawi.go.id';
}

// Fungsi untuk konsultasi online
function consultationOnline() {
    // Redirect ke URL konsultasi online
    window.location.href = 'https://konsultasi-gizi-online.com';
}
