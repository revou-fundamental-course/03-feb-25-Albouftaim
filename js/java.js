document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const calculationArea = document.getElementById("calculation");
    const convertButton = document.getElementById("convert");
    const resetButton = document.getElementById("reset");
    const reverseButton = document.getElementById("reverse");

    let isCelsiusToFahrenheit = true; // Mode awal: Celsius ke Fahrenheit

    function convertTemperature() {
        const inputValue = isCelsiusToFahrenheit 
            ? parseFloat(celsiusInput.value.trim()) 
            : parseFloat(fahrenheitInput.value.trim());

        if (isNaN(inputValue)) {
            alert("Masukkan angka yang valid!");
            return;
        }

        let convertedValue, calculationFormula;

        if (isCelsiusToFahrenheit) {
            // Celsius ke Fahrenheit
            convertedValue = (inputValue * 9) / 5 + 32;
            calculationFormula = `${inputValue}°C × (9/5) + 32 = ${convertedValue.toFixed(2)}°F`;
            fahrenheitInput.value = convertedValue.toFixed(2);
        } else {
            // Fahrenheit ke Celsius
            convertedValue = ((inputValue - 32) * 5) / 9;
            calculationFormula = `(${inputValue}°F − 32) × (5/9) = ${convertedValue.toFixed(2)}°C`;
            celsiusInput.value = convertedValue.toFixed(2);
        }

        calculationArea.value = calculationFormula;
    }

    function resetFields() {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        calculationArea.value = "";
    }

    function toggleConversionDirection() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        resetFields();

        // Mengubah placeholder sesuai mode konversi
        if (isCelsiusToFahrenheit) {
            celsiusInput.placeholder = "Masukkan suhu dalam °C";
            fahrenheitInput.placeholder = "Hasil suhu dalam °F";
            celsiusInput.removeAttribute("readonly");
            fahrenheitInput.setAttribute("readonly", true);
        } else {
            celsiusInput.placeholder = "Hasil suhu dalam °C";
            fahrenheitInput.placeholder = "Masukkan suhu dalam °F";
            celsiusInput.setAttribute("readonly", true);
            fahrenheitInput.removeAttribute("readonly");
        }

        alert(`Mode konversi sekarang: ${isCelsiusToFahrenheit ? "Celsius ke Fahrenheit" : "Fahrenheit ke Celsius"}`);
    }

    // Default input aktif hanya untuk Celsius
    fahrenheitInput.setAttribute("readonly", true);

    // Event Listeners
    convertButton.addEventListener("click", convertTemperature);
    resetButton.addEventListener("click", resetFields);
    reverseButton.addEventListener("click", toggleConversionDirection);
});
