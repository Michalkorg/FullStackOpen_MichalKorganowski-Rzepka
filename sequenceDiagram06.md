sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note_spa.json
    activate server
    server-->>browser: succes(note created)
    deactivate server