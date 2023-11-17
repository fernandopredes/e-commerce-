import styled from 'styled-components';

export const StyledH2 = styled.div`
    text-align: center;
    font-size: 30px;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 8vh;

    .checkout-content {
        display: flex;
        width: 800px;
        justify-content: space-around;
    }

    h2 {
        font-size: 36px;
        margin-bottom: 2rem;
    }

    .payment-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 260px;
        background-color: #333;
        padding: 2rem;
    }

    .items {
        width: 260px;
        background-color: #333;
        padding: 2rem;

        height: 420px;
        overflow-y: auto;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;

        img {
            width: 100px;
            height: auto;
            margin-right: 1rem;
            border-radius: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;
