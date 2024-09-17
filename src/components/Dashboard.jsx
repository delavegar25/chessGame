CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT 
  uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    is_verified BOOLEAN DEFAULT false,
    otp_code VARCHAR(6),
    last_login TIMESTAMPTZ
  );
  
  