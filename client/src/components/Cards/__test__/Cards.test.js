import { render, screen } from '@testing-library/react';
import Cards from "../Cards"
import energyData from "../../../mocks/energyData.json"
describe("Cards", () => {
    test("Should render twelve cards", () => {
        render(<Cards energyData={energyData} />);
        expect(screen.getAllByRole("article").length).toBe(12);
    });
});
