



CREATE TABLE "ТЧПрКомпРеш"
(

	"primaryKey" RAW(16) NOT NULL,

	"НазвМер" NVARCHAR2(255) NULL,

	"ОписМер" NVARCHAR2(255) NULL,

	"ПрКомпРеш" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчОпрПотрТз"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимТз" NVARCHAR2(255) NULL,

	"ОпТз" NVARCHAR2(255) NULL,

	"ОпрПотрТз" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПрКомпРеш"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ПериодПрОт" DATE NULL,

	"ПериодПрДо" DATE NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОпрПотрТз"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"СпрСотр" RAW(16) NOT NULL,

	"РабОтдел" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РабОтдел"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧПрКомпРеш"
	ADD CONSTRAINT "ТЧПрКомпРеш_F_3251" FOREIGN KEY ("ПрКомпРеш") REFERENCES "ПрКомпРеш" ("primaryKey");

CREATE INDEX "ТЧПрКомпРеш_I_3122" on "ТЧПрКомпРеш" ("ПрКомпРеш");

ALTER TABLE "ТчОпрПотрТз"
	ADD CONSTRAINT "ТчОпрПотрТз_F_2472" FOREIGN KEY ("ОпрПотрТз") REFERENCES "ОпрПотрТз" ("primaryKey");

CREATE INDEX "ТчОпрПотрТз_I_1717" on "ТчОпрПотрТз" ("ОпрПотрТз");

ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДолж_1198" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "СпрСотр_IДолж_3774" on "СпрСотр" ("Должность");

ALTER TABLE "ПрКомпРеш"
	ADD CONSTRAINT "ПрКомпРеш_FСп_3498" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ПрКомпРеш_IСп_3156" on "ПрКомпРеш" ("СпрСотр");

ALTER TABLE "ОпрПотрТз"
	ADD CONSTRAINT "ОпрПотрТз_FСп_8140" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ОпрПотрТз_IСпр_44" on "ОпрПотрТз" ("СпрСотр");

ALTER TABLE "ОпрПотрТз"
	ADD CONSTRAINT "ОпрПотрТз_FРа_3868" FOREIGN KEY ("РабОтдел") REFERENCES "РабОтдел" ("primaryKey");

CREATE INDEX "ОпрПотрТз_IРа_7007" on "ОпрПотрТз" ("РабОтдел");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


