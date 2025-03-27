## NestJS dependency execution order

| **Component**             | **Execution Order**    | **Purpose**                                               |
|---------------------------|------------------------|-----------------------------------------------------------|
| **Middleware**            | 1️⃣ (Before Everything) | Logs requests, modifies headers, etc.                     |
| **Guards**                | 2️⃣ (Before Pipes)      | Checks authentication & authorization.                    |
| **Interceptors (Before)** | 3️⃣                     | Logs, modifies request before controller.                 |
| **Pipes**                 | 4️⃣                     | Transforms & validates data before reaching the controller.|
| **Controller**            | 5️⃣                     | Handles the request & calls the service.                  |
| **Service**               | 6️⃣                     | Executes business logic.                                  |
| **Interceptors (After)**  | 7️⃣                     | Modifies response before sending to client.               |
| **Exception Filters**     | 8️⃣                     | Handles errors if they occur.                             |
| **Response**              | 9️⃣                     | Sends final response to the client.                       |