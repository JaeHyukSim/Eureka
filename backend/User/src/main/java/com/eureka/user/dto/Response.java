package com.eureka.user.dto;


public class Response {
    private String response;
    private String message;
    private Object data;

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Response(String response, String message, Object data) {
        this.response = response;
        this.message = message;
        this.data = data;
    }

}
