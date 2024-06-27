# Currency Converter Chrome Extension

## Overview

This project is a Currency Converter Chrome Extension developed as part of a CS50 from Harvard course project. The extension allows users to convert currencies using the ExchangeRate-API. Users can input an amount in one currency and convert it to another currency directly from the Chrome toolbar.

## Features

- Convert between 30 different currencies.
- Simple and intuitive user interface.
- Uses the free ExchangeRate-API for real-time exchange rates.

## Installation

**Clone the Repository**:
```sh
   git clone https://github.com/miguelmarqs/Currency-Converter-Chrome-Extension.git
   cd Currency-Converter-Chrome-Extension
```

## Load the Extension in Chrome:

Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top right corner.
Click the "Load unpacked" button and select the project directory.

## Usage
Open the Extension:
Click the extension icon in the Chrome toolbar.
Convert Currencies:
Enter the amount you want to convert.
Select the currency you are converting from.
Select the currency you are converting to.
Click the "Convert" button to see the converted amount.

## Project Structure
manifest.json: Defines the extension's metadata and permissions.
background.js: Handles background tasks (optional for this project).
popup.html: Provides a user interface for entering the amount and selecting currencies.
popup.js: Handles user interactions and fetches exchange rates from the API.
icons/: Contains the icons used for the extension's icon in the Chrome toolbar.

## API Key
This extension uses the ExchangeRate-API to fetch real-time exchange rates. You need to obtain an API key from ExchangeRate-API and replace 'YOUR_API_KEY' in the popup.js file with your actual API key.

## How to Get an API Key
Visit the ExchangeRate-API Website:
Go to ExchangeRate-API.
Sign Up for an Account:
Click on the "Get Free Key" button or navigate to the sign-up page.
Fill in the required details such as your email address and password.
Complete the registration process.
Confirm Your Email:
Check your email inbox for a confirmation email from ExchangeRate-API.
Click on the confirmation link in the email to verify your account.
Access Your API Key:
Log in to your ExchangeRate-API account.
Navigate to the dashboard or API key section.
Copy the API key to use it in your Chrome extension.

## Supported Currencies
- USD - United States Dollar
- EUR - Euro
- GBP - British Pound Sterling
- JPY - Japanese Yen
- AUD - Australian Dollar
- CAD - Canadian Dollar
- CHF - Swiss Franc
- CNY - Chinese Yuan
- INR - Indian Rupee
- BRL - Brazilian Real
- RUB - Russian Ruble
- ZAR - South African Rand
- SGD - Singapore Dollar
- HKD - Hong Kong Dollar
- NZD - New Zealand Dollar
- MXN - Mexican Peso
- SEK - Swedish Krona
- NOK - Norwegian Krone
- DKK - Danish Krone
- PLN - Polish Zloty
- TRY - Turkish Lira
- HUF - Hungarian Forint
- CZK - Czech Koruna
- ILS - Israeli Shekel
- MYR - Malaysian Ringgit
- THB - Thai Baht
- IDR - Indonesian Rupiah
- PHP - Philippine Peso
- KRW - South Korean Won
- VND - Vietnamese Dong

## Acknowledgments
ExchangeRate-API for providing the free exchange rate API.
Harvard University for the inspiration and guidance in developing this project.
