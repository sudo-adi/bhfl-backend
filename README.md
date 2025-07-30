# BFHL Express.js TypeScript API

A production-grade REST API built with Express.js and TypeScript for the BFHL assignment.

## 🚀 Features

- ✅ **Express.js** with TypeScript for type safety
- ✅ **Production-ready** folder structure with separation of concerns
- ✅ **Comprehensive validation** using Joi
- ✅ **Security middleware** (Helmet, CORS, Rate limiting)
- ✅ **Error handling** and logging
- ✅ **Health check** endpoints
- ✅ **Request/Response compression**
- ✅ **Morgan logging** in production
- ✅ **Graceful shutdown** handling

## 📋 API Specification

### Endpoint: `POST /bfhl`

Processes an array of mixed data and returns categorized results.

**Request:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "aditya_sharma_15081999",
  "email": "aditya@example.com",
  "roll_number": "AD123456",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "rA"
}
```

## 🛠️ Quick Start

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Update Your Details**
Edit `.env` file:
```env
USER_FULL_NAME=your_name_here
USER_BIRTH_DATE=ddmmyyyy
USER_EMAIL=your.email@example.com
USER_ROLL_NUMBER=YOUR123
```

### 3. **Development**
```bash
npm run dev
```

### 4. **Production Build**
```bash
npm run build
npm start
```

## 🧪 Testing the API

```bash
# Health check
curl http://localhost:8000/health

# Test BFHL endpoint
curl -X POST http://localhost:8000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

## 📁 Project Structure

```
src/
├── controllers/     # Request handlers
├── middleware/      # Custom middleware
├── models/         # TypeScript interfaces
├── routes/         # Route definitions
├── services/       # Business logic
├── utils/          # Configuration & utilities
├── app.ts          # Express app setup
└── server.ts       # Server entry point
```

## 🔧 Available Scripts

```bash
npm run dev         # Development with hot reload
npm run build       # Build for production
npm start           # Run production build
npm run clean       # Clean dist folder
npm run lint        # ESLint check
npm run lint:fix    # Fix ESLint errors
```

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Joi schema validation
- **Compression**: Gzip compression
- **Trust Proxy**: For reverse proxy setups

## 📊 Monitoring

- **Health Check**: `GET /health`
- **Request Logging**: Morgan in production
- **Error Handling**: Centralized error handling
- **Graceful Shutdown**: SIGTERM/SIGINT handling

## 🌍 Environment Variables

```env
PORT=8000
NODE_ENV=development
USER_FULL_NAME=aditya_prasad
USER_BIRTH_DATE=15081999
USER_EMAIL=aditya@example.com
USER_ROLL_NUMBER=AD123456
CORS_ORIGIN=*
```

## ✅ Edge Cases Tested

1. **Empty Array**: Returns empty arrays for all categories
2. **Invalid JSON**: Proper error handling
3. **Missing Data Field**: Validation error
4. **Non-Array Data**: Validation error
5. **Large Numbers**: Handles big integers correctly
6. **Mixed Case Alphabets**: Converts to uppercase
7. **Special Characters**: Includes symbols, spaces, alphanumeric strings
8. **Whitespace**: Properly trims and processes
9. **Single Characters**: Works with individual elements
10. **Complex Mixed Data**: Handles all data types together

## ✅ All BFHL Requirements Met

- ✅ POST `/bfhl` endpoint
- ✅ Status code 200 for success
- ✅ Proper user_id format: `{name}_{ddmmyyyy}`
- ✅ Array categorization (odd/even numbers, alphabets, special chars)
- ✅ Numbers returned as strings
- ✅ Sum calculation
- ✅ Concatenation with alternating caps in reverse order
- ✅ Error handling with `is_success` flag

## 🚀 Endpoints

- **GET /** - API information
- **GET /health** - Health check
- **POST /bfhl** - Main BFHL processing endpoint

**Ready to deploy immediately!** 🚀
# bhfl-backend
