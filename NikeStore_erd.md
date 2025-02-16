```mermaid
erDiagram
CUSTOMER ||-- 0{ SALES : places
    CUSTOMER {
        string custNumber
        string name
    }
PRODUCT ||-- 0{ SALES : CONTAINS
 PRODUCT { 
        string prodNumber
        string type
    }
 SALES { 
        string salesNumber
        string order
        string  custNumber
        string prodNumber
    }
PRODUCT ||-- 0{ IVENTORY : CONTAINS
 INVENTORY {
        string inventNumber
        int amount
        string prodNumber
    }
    ```
