<%@page contentType="text/html" pageEncoding="UTF-8"%> <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<!-- font awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
  integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
<!-- CSS only -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
  crossorigin="anonymous"
/>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Resultado</title>
  </head>
  <body>
    Tu imc es:<c:out value="${imc}" />
    <br />
    <h3>Usted:<c:out value="${sobrepeso}" /></h3>
    <a href="./html/carrito.html" class="button">Comprar boletos <i class="fa-solid fa-ticket"></i></a>
  </body>
</html>
