CREATE TABLE personer (
    id SERIAL PRIMARY KEY,
    navn VARCHAR(100) NOT NULL,
    alder INT,
    forelder_id INT REFERENCES personer(id) ON DELETE SET NULL
);
