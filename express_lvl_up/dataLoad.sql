CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    topic_name TEXT NOT NULL,
    topic_rank INTEGER REFERENCES ranking(id)
);


CREATE TABLE ranking (
    id SERIAL PRIMARY KEY,
    rank_name VARCHAR(50),
    rank_value INTEGER CHECK (rank_value >=0 AND rank_value <=5)
);

INSERT INTO topics (
    topic_name, topic_rank
)
    VALUES
        ('HTML', 6),
        ('CSS', 6),
        ('JavaScript', 6),
        ('PostgreSQL', 6),
        ('Node', 6),
        ('Express', 6);


INSERT INTO ranking (
    rank_name, rank_value
)
    VALUES 
        ('Awesome', 5),
        ('Great', 4),
        ('Good', 3),
        ('Okay', 2),
        ('Poor', 1),
        ('Unranked', 0);