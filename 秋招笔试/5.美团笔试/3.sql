Grade(sno int,sanme varchar(10),class_id int,gpa float)


SELECT sno,sname FROM Grade WHERE gpa>=ALL(SELECT gpa FROM Grade WHERE class_id=0) and class_id=0


SELECT sno,sname FROM Grade WHERE gpa=(SELECT MAX(gpa) FROM Grade WHERE class_id=9) 