--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

-- Started on 2021-12-17 10:36:28 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 188199)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 188197)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 2995 (class 0 OID 0)
-- Dependencies: 202
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 207 (class 1259 OID 188221)
-- Name: event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event (
    id integer NOT NULL,
    name character varying,
    description character varying,
    datetime timestamp without time zone,
    latitude double precision,
    longitude double precision,
    category_id integer,
    user_id integer
);


ALTER TABLE public.event OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 188219)
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO postgres;

--
-- TOC entry 2996 (class 0 OID 0)
-- Dependencies: 206
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- TOC entry 205 (class 1259 OID 188210)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 188208)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 2997 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 2847 (class 2604 OID 188202)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 2849 (class 2604 OID 188224)
-- Name: event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- TOC entry 2848 (class 2604 OID 188213)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 2985 (class 0 OID 188199)
-- Dependencies: 203
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name) FROM stdin;
1	furto
2	assalto arma branca
3	assalto arma de fogo
4	homicídio
5	sequestro
\.


--
-- TOC entry 2989 (class 0 OID 188221)
-- Dependencies: 207
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.event (id, name, description, datetime, latitude, longitude, category_id, user_id) FROM stdin;
1	Furto praça sete	Roubaram meu celular enquanto pedia um uber na praça sete, polícia não conseguiu pegá-lo a tempo.	2021-12-09 19:10:00	-19.919217744670128	-43.93853130041829	1	1
2	Mataram meu vizinho!	Observei um homicídio ocorrendo após uma discussão familiar no prédio ao lado na nova gameleira. Chamei a polícia mas não conseguiram chegar a tempo.	2021-06-22 10:19:00	-19.943873511149988	-43.99222796311918	4	2
3	Furto no parque	Enquanto tirava fotos do meu filho brincando no parque de diversões do parque municipal, alguém pegou meu celular e saiu correndo.	2021-07-02 09:20:00	-19.923099339147353	-43.93259654753643	1	3
4	Assalto de carro	Um sujeito portando uma arma de fogo me abordou pedindo que saísse e entregasse a chave do meu carro enquando voltava para casa após o meu trabalho. O foto ocorreu na Avenida Amazonas do bairro Prado.	2021-08-21 19:26:00	-19.93119028894457	-43.965858652823215	3	4
5	Furto no mercado	Em um breve momento em que deixei minha sacola cheia de queijos no chão do mercado central, alguém a furtou sem que eu ao menos visse a pessoa.	2021-06-17 15:15:00	-19.92255597875196	-43.9433323413356	1	1
6	Sequestraram minha filha	Enquanto minha filha de 7 anos saída da escola, estranhos a sequestraram. Me ligaram e a botaram no telefone, estão me pedindo 15 mil reais.	2021-10-22 12:00:00	-19.926335938356928	-43.9493965726701	5	2
7	novo evento	este é um novo evento	2021-12-09 19:10:00	-1	-1	1	1
\.


--
-- TOC entry 2987 (class 0 OID 188210)
-- Dependencies: 205
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, name) FROM stdin;
1	Leonel Mota
2	Alexander Holmquist
3	Fernando Tonucci
4	Felipe Jaworoski
\.


--
-- TOC entry 2998 (class 0 OID 0)
-- Dependencies: 202
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 2999 (class 0 OID 0)
-- Dependencies: 206
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.event_id_seq', 7, true);


--
-- TOC entry 3000 (class 0 OID 0)
-- Dependencies: 204
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- TOC entry 2851 (class 2606 OID 188207)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 2855 (class 2606 OID 188229)
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- TOC entry 2853 (class 2606 OID 188218)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2856 (class 2606 OID 188230)
-- Name: event event_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 2857 (class 2606 OID 188235)
-- Name: event event_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2021-12-17 10:36:28 -03

--
-- PostgreSQL database dump complete
--

