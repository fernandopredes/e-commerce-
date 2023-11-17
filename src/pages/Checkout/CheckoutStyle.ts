import styled from 'styled-components';

export const StyledDiv = styled.div`
    margin-bottom: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      font-size: 36px;
    }

    .items {
        width: 260px;
        margin: 0 auto;
        background-color: #333;
        padding: 2rem;
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
`
