CREATE DATABASE telegram_chat
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE telegram_chat
    IS 'database telegram chat for task pijar camp week 11';


-- table chats 
CREATE TABLE IF NOT EXISTS public.chats
(
    id integer NOT NULL DEFAULT nextval('chats_id_seq'::regclass),
    sender integer,
    receiver integer,
    message text COLLATE pg_catalog."default",
    created_at time with time zone NOT NULL DEFAULT now(),
    time_send character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT chats_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.chats
    OWNER to postgres;

-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    full_name character varying(50) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(15) COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id, email),
    avatar  varchar,
    created_at timestamptz default now()
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;


-- versi belum jadi
CREATE TABLE public.chats
(
    id serial NOT NULL,
    sender integer,
    receiver integer,
    message text,
    time_send character varying(50),
    created_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.chats
    OWNER to postgres;


CREATE TABLE public.users
(
    id serial NOT NULL,
    full_name character varying(50),
    email character varying(50),
    phone character varying(20),
    password character varying,
    avatar character varying,
    ava_pub_id character varying,
    ava_url character varying,
    ava_url_secure character varying,
    ava_secure_url character varying,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;
