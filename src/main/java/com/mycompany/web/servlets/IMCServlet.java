package com.mycompany.web.servlets;

import java.io.IOException;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "IMCServlet", urlPatterns = { "/imc" })
public class IMCServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Parametros de usuario
        double peso = Double.valueOf(req.getParameter("peso"));
        double altura = Double.valueOf(req.getParameter("altura"));

        double imc = peso / (altura * altura);
        String sobrepeso = imc > 25 ? "Puede interactuar con pinguinos" : "No puede interactuar con pinguinos";

        req.setAttribute("imc", imc);
        req.setAttribute("sobrepeso", sobrepeso);

        RequestDispatcher respuesta = req.getRequestDispatcher("/resultado.jsp");
        respuesta.forward(req, resp);

        if (imc > 25) {
            System.out.println("Usted tiene sobrepeso");

        } else {
            System.out.println("Usted tiene peso normal");
        }

    }
}
