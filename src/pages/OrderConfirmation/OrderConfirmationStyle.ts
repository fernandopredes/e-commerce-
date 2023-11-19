import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    img {
      max-width: 400px;
    }
    @media (max-width: 600px) {
        padding: 10px;
        max-width: 100%;
        img {
            max-width: 100%;
        }
    }
`;

export const Title = styled.h1`
    color: #333;
    text-align: center;
`;

export const SuccessMessage = styled.p`
    color: green;
    text-align: center;
    font-size: 18px;
`;

export const OrderDetails = styled.div`
    margin-top: 20px;
`;

export const ItemList = styled.div`
    margin-top: 10px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        margin-right: 15px;
    }

    div {
        h3 {
            margin: 0;
            color: #555;
        }
        p {
            margin: 5px 0;
            color: #777;
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: start;

        img {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
        }
    }
`;

export const Summary = styled.div`
    margin-top: 15px;
    p, h3 {
        margin: 5px 0;
        color: #555;
    }
`;

export const PaymentMethod = styled.p`
    font-weight: bold;
    color: #444;
`;
