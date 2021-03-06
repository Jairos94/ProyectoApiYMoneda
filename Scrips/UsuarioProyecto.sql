USE [master]
GO
CREATE LOGIN [EyTest] WITH PASSWORD=N'12345678' MUST_CHANGE, DEFAULT_DATABASE=[master], CHECK_EXPIRATION=ON, CHECK_POLICY=ON
GO
ALTER SERVER ROLE [processadmin] ADD MEMBER [EyTest]
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [EyTest]
GO
USE [DI_MFSD_J_R]
GO
CREATE USER [EyTest] FOR LOGIN [EyTest]
GO
