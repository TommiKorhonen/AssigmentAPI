import { render, screen } from '@testing-library/react';
import { rest } from "msw"
import { setupServer } from "msw/node"
import energyDataMock from "../../../mocks/energyData.json"
import EnergyApp from "../EnergyApp";

const server = setupServer(
    rest.get("http://localhost:4000/energyMonthly", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(energyDataMock)
        );
    })
);

beforeAll(() => server.listen)
afterEach(() => server.resetHandlers)
afterAll(() => server.close)

describe("EnergyApp", () => {
    test("should render the correct amount of cards", async () => {
        render(<EnergyApp />)
        const cards = await screen.findAllByRole("article");
        expect(cards.length).toBe(12);
    });
});