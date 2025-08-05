import java.io.*;
import java.net.*;

public class SimpleHttpServer {
    public static void main(String[] args) throws IOException {
        int port = 8080;
        ServerSocket serverSocket = new ServerSocket(port);
        System.out.println("Server started at http://localhost:" + port);

        while (true) {
            Socket socket = serverSocket.accept();
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            out.println("HTTP/1.1 200 OK");
            out.println("Content-Type: text/html");
            out.println();
            out.println("<h1>Available Trains:</h1>");
            out.println("<p>101 - Express 1 (Hyderabad to Tirupati) | Seats Available: 5</p>");
            out.println("<p>102 - Express 2 (Chennai to Delhi) | Seats Available: 3</p>");
            out.println("<p>103 - Express 3 (Mumbai to Pune) | Seats Available: 2</p>");

            out.close();
            socket.close();
        }
    }
}
