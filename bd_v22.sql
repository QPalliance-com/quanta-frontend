CREATE SCHEMA IF NOT EXISTS bi;
CREATE SCHEMA IF NOT EXISTS crm;
CREATE SCHEMA IF NOT EXISTS inv;
CREATE SCHEMA IF NOT EXISTS prd;
CREATE SCHEMA IF NOT EXISTS sales;
CREATE SCHEMA IF NOT EXISTS sys;
CREATE SCHEMA IF NOT EXISTS pur;

-- bi.bi_kpi definition

-- Drop table

-- DROP TABLE bi.bi_kpi;

CREATE TABLE bi.bi_kpi (
	id serial4 NOT NULL,
	user_id int4 NULL,
	"name" varchar(100) NULL,
	value numeric(12, 2) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT bi_kpi_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_bi_bi_kpi_record_state
ON bi.bi_kpi (record_state);



-- sys.billing_customer_payment_method definition

-- Drop table

-- DROP TABLE sys.billing_customer_payment_method;

CREATE TABLE sys.billing_customer_payment_method (
	id serial4 NOT NULL,
	customer_id int4 NULL,
	payment_token text NULL,
	payment_provider varchar(50) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT billing_customer_payment_method_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_sys_billing_customer_payment_method_record_state
ON sys.billing_customer_payment_method (record_state);



-- crm.crm_customer definition

-- Drop table

-- DROP TABLE crm.crm_customer;

CREATE TABLE crm.crm_customer (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	email varchar(100) NULL,
	phone varchar(30) NULL,
	address text NULL,
	default_production_model_id int4 NULL,
	billing_start_date date DEFAULT CURRENT_DATE NULL,
	notes text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT crm_customer_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_crm_crm_customer_record_state
ON crm.crm_customer (record_state);



-- crm.crm_forecast definition

-- Drop table

-- DROP TABLE crm.crm_forecast;

CREATE TABLE crm.crm_forecast (
	id serial4 NOT NULL,
	product_id int4 NULL,
	forecast_date date NULL,
	quantity int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT crm_forecast_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_crm_crm_forecast_record_state
ON crm.crm_forecast (record_state);



-- inv.inv_product_line definition

-- Drop table

-- DROP TABLE inv.inv_product_line;

CREATE TABLE inv.inv_product_line (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	description text NULL,
	production_model_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_product_line_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_inv_inv_product_line_record_state
ON inv.inv_product_line (record_state);



-- inv.inv_product definition

-- Drop table

-- DROP TABLE inv.inv_product;

CREATE TABLE inv.inv_product (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	"type" varchar(50) NULL,
	min_stock int4 NULL,
	max_stock int4 NULL,
	unit varchar(20) NULL,
	valuation_method varchar(10) NULL,
	production_model_id int4 NULL,
	product_line_id int4 NULL,
	economic_order_quantity int4 DEFAULT 0 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_product_pkey PRIMARY KEY (id),
	CONSTRAINT inv_product_product_line_id_fkey FOREIGN KEY (product_line_id) REFERENCES inv.inv_product_line(id)
);
CREATE INDEX idx_inv_inv_product_record_state
ON inv.inv_product (record_state);



-- inv.inv_user_inventory_rules definition

-- Drop table

-- DROP TABLE inv.inv_user_inventory_rules;

CREATE TABLE inv.inv_user_inventory_rules (
	id serial4 NOT NULL,
	user_id int4 NULL,
	product_id int4 NULL,
	min_stock_override int4 NULL,
	max_stock_override int4 NULL,
	economic_order_quantity_override int4 NULL,
	restock_time_days_override int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_user_inventory_rules_pkey PRIMARY KEY (id),
	CONSTRAINT inv_user_inventory_rules_product_id_fkey FOREIGN KEY (product_id) REFERENCES inv.inv_product(id)
);
CREATE INDEX idx_inv_inv_user_inventory_rules_record_state
ON inv.inv_user_inventory_rules (record_state);



-- inv.inv_warehouse definition

-- Drop table

-- DROP TABLE inv.inv_warehouse;

CREATE TABLE inv.inv_warehouse (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	"location" text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_warehouse_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_inv_inv_warehouse_record_state
ON inv.inv_warehouse (record_state);



-- prd.prd_production_model definition

-- Drop table

-- DROP TABLE prd.prd_production_model;

CREATE TABLE prd.prd_production_model (
	id serial4 NOT NULL,
	code varchar(10) NULL,
	description text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_production_model_code_key UNIQUE (code),
	CONSTRAINT prd_production_model_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_prd_prd_production_model_record_state
ON prd.prd_production_model (record_state);



-- prd.prd_resource definition

-- Drop table

-- DROP TABLE prd.prd_resource;

CREATE TABLE prd.prd_resource (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	"type" varchar(50) NULL,
	available_hours_per_day int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_resource_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_prd_prd_resource_record_state
ON prd.prd_resource (record_state);



-- prd.prd_simulation_scenario definition

-- Drop table

-- DROP TABLE prd.prd_simulation_scenario;

CREATE TABLE prd.prd_simulation_scenario (
	id serial4 NOT NULL,
	scenario_name varchar(100) NULL,
	description text NULL,
	created_at timestamp NOT NULL,
	created_by_user_id int4 NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_simulation_scenario_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_prd_prd_simulation_scenario_record_state
ON prd.prd_simulation_scenario (record_state);



-- public.pur_supplier definition

-- Drop table

-- DROP TABLE public.pur_supplier;

CREATE TABLE pur.pur_supplier (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	contact_name varchar(100) NULL,
	phone varchar(30) NULL,
	email varchar(100) NULL,
	address text NULL,
	delivery_lead_days int4 NULL,
	rating numeric(3, 2) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT pur_supplier_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_pur_pur_supplier_record_state
ON pur.pur_supplier (record_state);



-- sales.sales_order definition

-- Drop table

-- DROP TABLE sales.sales_order;

CREATE TABLE sales.sales_order (
	id serial4 NOT NULL,
	customer_id int4 NULL,
	order_date date DEFAULT CURRENT_DATE NOT NULL,
	status varchar(50) DEFAULT 'confirmed'::character varying NULL,
	total numeric(12, 2) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sales_order_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_sales_sales_order_record_state
ON sales.sales_order (record_state);



-- sys.sys_alert definition

-- Drop table

-- DROP TABLE sys.sys_alert;

CREATE TABLE sys.sys_alert (
	id serial4 NOT NULL,
	product_id int4 NULL,
	alert_type varchar(50) NULL,
	message text NULL,
	resolved bool DEFAULT false NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_alert_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_sys_sys_alert_record_state
ON sys.sys_alert (record_state);



-- sys.sys_permission definition

-- Drop table

-- DROP TABLE sys.sys_permission;

CREATE TABLE sys.sys_permission (
	id serial4 NOT NULL,
	module_name varchar(100) NULL,
	"action" varchar(50) NULL,
	description text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_permission_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_sys_sys_permission_record_state
ON sys.sys_permission (record_state);



-- sys.sys_role definition

-- Drop table

-- DROP TABLE sys.sys_role;

CREATE TABLE sys.sys_role (
	id serial4 NOT NULL,
	"name" varchar(50) NOT NULL,
	description text NULL,
	monthly_cost numeric(10, 2) DEFAULT 0 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_role_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_sys_sys_role_record_state
ON sys.sys_role (record_state);



-- sys.sys_user definition

-- Drop table

-- DROP TABLE sys.sys_user;

CREATE TABLE sys.sys_user (
	id serial4 NOT NULL,
	"name" varchar(100) NULL,
	username varchar(100) NULL,
	email varchar(100) NULL,
	password_hash text NULL,
	auth_provider varchar(50) NULL,
	mfa_enabled bool DEFAULT false NULL,
	status varchar(20) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_user_email_key UNIQUE (email),
	CONSTRAINT sys_user_pkey PRIMARY KEY (id),
	CONSTRAINT sys_user_username_key UNIQUE (username)
);
CREATE INDEX idx_sys_sys_user_record_state
ON sys.sys_user (record_state);



-- sys.billing_user_activity definition

-- Drop table

-- DROP TABLE sys.billing_user_activity;

CREATE TABLE sys.billing_user_activity (
	id serial4 NOT NULL,
	user_id int4 NULL,
	usage_date date NOT NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT billing_user_activity_pkey PRIMARY KEY (id),
	CONSTRAINT billing_user_activity_user_id_fkey FOREIGN KEY (user_id) REFERENCES sys.sys_user(id)
);
CREATE INDEX idx_sys_billing_user_activity_record_state
ON sys.billing_user_activity (record_state);



-- crm.crm_opportunity definition

-- Drop table

-- DROP TABLE crm.crm_opportunity;

CREATE TABLE crm.crm_opportunity (
	id serial4 NOT NULL,
	customer_id int4 NULL,
	stage varchar(50) NULL,
	potential_value numeric(12, 2) NULL,
	status varchar(50) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT crm_opportunity_pkey PRIMARY KEY (id),
	CONSTRAINT crm_opportunity_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES crm.crm_customer(id)
);
CREATE INDEX idx_crm_crm_opportunity_record_state
ON crm.crm_opportunity (record_state);



-- crm.crm_opportunity_activity definition

-- Drop table

-- DROP TABLE crm.crm_opportunity_activity;

CREATE TABLE crm.crm_opportunity_activity (
	id serial4 NOT NULL,
	opportunity_id int4 NOT NULL,
	activity_type varchar(50) NULL,
	description text NULL,
	activity_date timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT crm_opportunity_activity_pkey PRIMARY KEY (id),
	CONSTRAINT crm_opportunity_activity_opportunity_id_fkey FOREIGN KEY (opportunity_id) REFERENCES crm.crm_opportunity(id)
);
CREATE INDEX idx_crm_crm_opportunity_activity_record_state
ON crm.crm_opportunity_activity (record_state);



-- inv.inv_location definition

-- Drop table

-- DROP TABLE inv.inv_location;

CREATE TABLE inv.inv_location (
	id serial4 NOT NULL,
	warehouse_id int4 NULL,
	code varchar(50) NULL,
	description text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_location_pkey PRIMARY KEY (id),
	CONSTRAINT inv_location_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES inv.inv_warehouse(id)
);
CREATE INDEX idx_inv_inv_location_record_state
ON inv.inv_location (record_state);



-- inv.inv_product_bom definition

-- Drop table

-- DROP TABLE inv.inv_product_bom;

CREATE TABLE inv.inv_product_bom (
	id serial4 NOT NULL,
	product_id int4 NOT NULL,
	material_id int4 NOT NULL,
	quantity numeric(10, 2) NOT NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_product_bom_pkey PRIMARY KEY (id),
	CONSTRAINT inv_product_bom_product_id_material_id_key UNIQUE (product_id, material_id),
	CONSTRAINT inv_product_bom_material_id_fkey FOREIGN KEY (material_id) REFERENCES inv.inv_product(id),
	CONSTRAINT inv_product_bom_product_id_fkey FOREIGN KEY (product_id) REFERENCES inv.inv_product(id)
);
CREATE INDEX idx_inv_inv_product_bom_record_state
ON inv.inv_product_bom (record_state);



-- prd.prd_production_order definition

-- Drop table

-- DROP TABLE prd.prd_production_order;

CREATE TABLE prd.prd_production_order (
	id serial4 NOT NULL,
	product_id int4 NULL,
	quantity int4 NULL,
	start_date date NULL,
	end_date date NULL,
	status varchar(50) NULL,
	production_type varchar(20) NULL,
	production_model_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_production_order_pkey PRIMARY KEY (id),
	CONSTRAINT prd_production_order_production_model_id_fkey FOREIGN KEY (production_model_id) REFERENCES prd.prd_production_model(id)
);
CREATE INDEX idx_prd_prd_production_order_record_state
ON prd.prd_production_order (record_state);



-- prd.prd_production_progress definition

-- Drop table

-- DROP TABLE prd.prd_production_progress;

CREATE TABLE prd.prd_production_progress (
	id serial4 NOT NULL,
	production_order_id int4 NULL,
	progress_date timestamp NULL,
	stage_description text NULL,
	progress_percent numeric(5, 2) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_production_progress_pkey PRIMARY KEY (id),
	CONSTRAINT prd_production_progress_production_order_id_fkey FOREIGN KEY (production_order_id) REFERENCES prd.prd_production_order(id)
);
CREATE INDEX idx_prd_prd_production_progress_record_state
ON prd.prd_production_progress (record_state);



-- prd.prd_production_resource definition

-- Drop table

-- DROP TABLE prd.prd_production_resource;

CREATE TABLE prd.prd_production_resource (
	id serial4 NOT NULL,
	production_order_id int4 NULL,
	resource_id int4 NULL,
	assigned_hours int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_production_resource_pkey PRIMARY KEY (id),
	CONSTRAINT prd_production_resource_production_order_id_fkey FOREIGN KEY (production_order_id) REFERENCES prd.prd_production_order(id),
	CONSTRAINT prd_production_resource_resource_id_fkey FOREIGN KEY (resource_id) REFERENCES prd.prd_resource(id)
);
CREATE INDEX idx_prd_prd_production_resource_record_state
ON prd.prd_production_resource (record_state);



-- public.pur_purchase_order definition

-- Drop table

-- DROP TABLE public.pur_purchase_order;

CREATE TABLE pur.pur_purchase_order (
	id serial4 NOT NULL,
	supplier_id int4 NULL,
	order_date date NULL,
	expected_delivery date NULL,
	status varchar(50) NULL,
	notes text NULL,
	request_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT pur_purchase_order_pkey PRIMARY KEY (id),
	CONSTRAINT pur_purchase_order_supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES pur.pur_supplier(id)
);
CREATE INDEX idx_pur_pur_purchase_order_record_state
ON pur.pur_purchase_order (record_state);



-- public.pur_purchase_order_item definition

-- Drop table

-- DROP TABLE public.pur_purchase_order_item;

CREATE TABLE pur.pur_purchase_order_item (
	id serial4 NOT NULL,
	purchase_order_id int4 NULL,
	product_id int4 NULL,
	quantity int4 NULL,
	unit_price numeric(10, 2) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT pur_purchase_order_item_pkey PRIMARY KEY (id),
	CONSTRAINT pur_purchase_order_item_purchase_order_id_fkey FOREIGN KEY (purchase_order_id) REFERENCES pur.pur_purchase_order(id)
);
CREATE INDEX idx_pur_pur_purchase_order_item_record_state
ON pur.pur_purchase_order_item (record_state);



-- public.pur_supplier_contract definition

-- Drop table

-- DROP TABLE public.pur_supplier_contract;

CREATE TABLE pur.pur_supplier_contract (
	id serial4 NOT NULL,
	supplier_id int4 NOT NULL,
	contract_name varchar(100) NULL,
	valid_from date NULL,
	valid_to date NULL,
	payment_terms text NULL,
	volume_discount_percent numeric(5, 2) NULL,
	delivery_conditions text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT pur_supplier_contract_pkey PRIMARY KEY (id),
	CONSTRAINT pur_supplier_contract_supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES pur.pur_supplier(id)
);
CREATE INDEX idx_pur_pur_supplier_contract_record_state
ON pur.pur_supplier_contract (record_state);



-- public.pur_supplier_contract_document definition

-- Drop table

-- DROP TABLE public.pur_supplier_contract_document;

CREATE TABLE pur.pur_supplier_contract_document (
	id serial4 NOT NULL,
	contract_id int4 NOT NULL,
	document_id int4 NOT NULL,
	linked_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT pur_supplier_contract_document_pkey PRIMARY KEY (id),
	CONSTRAINT pur_supplier_contract_document_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES pur.pur_supplier_contract(id)
);
CREATE INDEX idx_pur_pur_supplier_contract_document_record_state
ON pur.pur_supplier_contract_document (record_state);



-- sales.sales_delivery definition

-- Drop table

-- DROP TABLE sales.sales_delivery;

CREATE TABLE sales.sales_delivery (
	id serial4 NOT NULL,
	sales_order_id int4 NULL,
	delivery_date date NULL,
	delivery_method varchar(100) NULL,
	delivery_location text NULL,
	status varchar(50) NULL,
	notes text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sales_delivery_pkey PRIMARY KEY (id),
	CONSTRAINT sales_delivery_sales_order_id_fkey FOREIGN KEY (sales_order_id) REFERENCES sales.sales_order(id)
);
CREATE INDEX idx_sales_sales_delivery_record_state
ON sales.sales_delivery (record_state);



-- sales.sales_order_item definition

-- Drop table

-- DROP TABLE sales.sales_order_item;

CREATE TABLE sales.sales_order_item (
	id serial4 NOT NULL,
	sales_order_id int4 NULL,
	product_id int4 NULL,
	quantity int4 NOT NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sales_order_item_pkey PRIMARY KEY (id),
	CONSTRAINT sales_order_item_sales_order_id_fkey FOREIGN KEY (sales_order_id) REFERENCES sales.sales_order(id)
);
CREATE INDEX idx_sales_sales_order_item_record_state
ON sales.sales_order_item (record_state);



-- sys.sys_audit definition

-- Drop table

-- DROP TABLE sys.sys_audit;

CREATE TABLE sys.sys_audit (
	id serial4 NOT NULL,
	user_id int4 NULL,
	"module" varchar(100) NULL,
	"action" varchar(100) NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	action_data text NULL,
	ip_origin varchar(50) NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_audit_pkey PRIMARY KEY (id),
	CONSTRAINT sys_audit_user_id_fkey FOREIGN KEY (user_id) REFERENCES sys.sys_user(id)
);
CREATE INDEX idx_sys_sys_audit_record_state
ON sys.sys_audit (record_state);



-- sys.sys_document definition

-- Drop table

-- DROP TABLE sys.sys_document;

CREATE TABLE sys.sys_document (
	id serial4 NOT NULL,
	customer_id int4 NULL,
	uploader_user_id int4 NULL,
	"module" varchar(100) NULL,
	file_name varchar(255) NULL,
	file_type varchar(50) NULL,
	s3_key text NULL,
	upload_timestamp timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_document_pkey PRIMARY KEY (id),
	CONSTRAINT sys_document_uploader_user_id_fkey FOREIGN KEY (uploader_user_id) REFERENCES sys.sys_user(id)
);
CREATE INDEX idx_sys_sys_document_record_state
ON sys.sys_document (record_state);



-- sys.sys_document_read definition

-- Drop table

-- DROP TABLE sys.sys_document_read;

CREATE TABLE sys.sys_document_read (
	id serial4 NOT NULL,
	document_id int4 NULL,
	user_id int4 NULL,
	read_timestamp timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	ip_origin varchar(50) NULL,
	device_info text NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_document_read_pkey PRIMARY KEY (id),
	CONSTRAINT sys_document_read_document_id_fkey FOREIGN KEY (document_id) REFERENCES sys.sys_document(id),
	CONSTRAINT sys_document_read_user_id_fkey FOREIGN KEY (user_id) REFERENCES sys.sys_user(id)
);
CREATE INDEX idx_sys_sys_document_read_record_state
ON sys.sys_document_read (record_state);



-- sys.sys_role_permission definition

-- Drop table

-- DROP TABLE sys.sys_role_permission;

CREATE TABLE sys.sys_role_permission (
	id serial4 NOT NULL,
	role_id int4 NULL,
	permission_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_role_permission_pkey PRIMARY KEY (id),
	CONSTRAINT sys_role_permission_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES sys.sys_permission(id),
	CONSTRAINT sys_role_permission_role_id_fkey FOREIGN KEY (role_id) REFERENCES sys.sys_role(id)
);
CREATE INDEX idx_sys_sys_role_permission_record_state
ON sys.sys_role_permission (record_state);



-- sys.sys_user_role definition

-- Drop table

-- DROP TABLE sys.sys_user_role;

CREATE TABLE sys.sys_user_role (
	id serial4 NOT NULL,
	user_id int4 NULL,
	role_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT sys_user_role_pkey PRIMARY KEY (id),
	CONSTRAINT sys_user_role_role_id_fkey FOREIGN KEY (role_id) REFERENCES sys.sys_role(id),
	CONSTRAINT sys_user_role_user_id_fkey FOREIGN KEY (user_id) REFERENCES sys.sys_user(id)
);
CREATE INDEX idx_sys_sys_user_role_record_state
ON sys.sys_user_role (record_state);



-- inv.inv_inventory definition

-- Drop table

-- DROP TABLE inv.inv_inventory;

CREATE TABLE inv.inv_inventory (
	id serial4 NOT NULL,
	product_id int4 NULL,
	warehouse_id int4 NULL,
	quantity numeric(10, 2) NULL,
	reserved numeric(10, 2) NULL,
	in_transit numeric(10, 2) NULL,
	location_id int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_inventory_pkey PRIMARY KEY (id),
	CONSTRAINT inv_inventory_location_id_fkey FOREIGN KEY (location_id) REFERENCES inv.inv_location(id),
	CONSTRAINT inv_inventory_product_id_fkey FOREIGN KEY (product_id) REFERENCES inv.inv_product(id),
	CONSTRAINT inv_inventory_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES inv.inv_warehouse(id)
);
CREATE INDEX idx_inv_inv_inventory_record_state
ON inv.inv_inventory (record_state);



-- inv.inv_inventory_movement definition

-- Drop table

-- DROP TABLE inv.inv_inventory_movement;

CREATE TABLE inv.inv_inventory_movement (
	id serial4 NOT NULL,
	inventory_id int4 NULL,
	movement_type varchar(50) NULL,
	quantity numeric(10, 2) NULL,
	movement_date timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	reference text NULL,
	destination_warehouse_id int4 NULL,
	lot_number varchar(50) NULL,
	serial_number varchar(50) NULL,
	expiration_date date NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT inv_inventory_movement_pkey PRIMARY KEY (id),
	CONSTRAINT inv_inventory_movement_destination_warehouse_id_fkey FOREIGN KEY (destination_warehouse_id) REFERENCES inv.inv_warehouse(id),
	CONSTRAINT inv_inventory_movement_inventory_id_fkey FOREIGN KEY (inventory_id) REFERENCES inv.inv_inventory(id)
);
CREATE INDEX idx_inv_inv_inventory_movement_record_state
ON inv.inv_inventory_movement (record_state);



-- prd.prd_material_requirement definition

-- Drop table

-- DROP TABLE prd.prd_material_requirement;

CREATE TABLE prd.prd_material_requirement (
	id serial4 NOT NULL,
	production_order_id int4 NULL,
	product_id int4 NULL,
	required_quantity int4 NULL,
	created_at timestamp NOT NULL,
	created_by varchar(100) NOT NULL,
	last_update timestamp NULL,
	last_modified_by varchar(100) NULL,
	record_state varchar(20) NOT NULL,
	CONSTRAINT prd_material_requirement_pkey PRIMARY KEY (id),
	CONSTRAINT prd_material_requirement_production_order_id_fkey FOREIGN KEY (production_order_id) REFERENCES prd.prd_production_order(id)
);
CREATE INDEX idx_prd_prd_material_requirement_record_state
ON prd.prd_material_requirement (record_state);
