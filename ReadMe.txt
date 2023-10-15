Info Update : 

15 Oktober 2023 (v1.0.1)
- Penambahan table col_sinkron_sales_shift
        CREATE TABLE `col_sinkron_sales_shift` (
            `kdtk` varchar(10) NOT NULL,
            `tanggal` date NOT NULL,
            `shift` int NOT NULL,
            `nominal` int DEFAULT NULL,
            `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
            `addid` varchar(50) DEFAULT NULL,
            `addtime` datetime DEFAULT NULL,
            `version` varchar(50) DEFAULT NULL,
            UNIQUE KEY `UNIX` (`kdtk`,`tanggal`,`shift`,`status`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
- Penambahan endpoint = [POST] http://localhost:7140/api/v1/collection/save
    Parameter : 
        [
            {
                "kdtk": "TIMX",
                "tanggal": "2023-09-11",
                "shift": "2",
                "nominal": 500000,
                "status": "PENDING HITUNG"
            }
        ]


13 September 2023 (v1.0.0)
- Membuat project ORIServiceSD6
- Membuat middleware
- Membuat api insert sales 
- Membuat api update status sales
- Membuat logger atas api insert sales & update status sales
- Membuat dokumentasi insert sales & update status sales