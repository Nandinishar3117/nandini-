package com.docqueryai.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
public class ApiError {
    private String message;
    private int status;
    private Instant timestamp;
}
