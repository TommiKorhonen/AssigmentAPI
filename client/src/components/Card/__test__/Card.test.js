import { render, screen } from '@testing-library/react';
import Card from '../Card';

const cardProps = {
    timestamp: "2019-01-31T00:00:00",
    reportingGroup: "Electricity",
    locationName: "1000 Hakaniemen kauppahalli",
    value: "247.38000000000002",
    unit: "kWh"
}

describe("Card", () => {
    test("should show data timestamp", () => {
        render(
            <Card
                {...cardProps}
            />);
        expect(screen.getByText(/2019-01-31T00:00:00/i)).toBeInTheDocument();
    });
    test("should show reportingGroup", () => {
        render(
            <Card
                {...cardProps}
            />);
        expect(screen.getByText(/electricity/i)).toBeInTheDocument();
    });
    test("should show locationName", () => {
        render(
            <Card
                {...cardProps}
            />);
        expect(screen.getByText(/1000 hakaniemen kauppahalli/i)).toBeInTheDocument();
    });
    test("should show value", () => {
        render(
            <Card
                {...cardProps}
            />);
        expect(screen.getByText(/247.38000000000002/i)).toBeInTheDocument();
    });
    test("should show unit", () => {
        render(
            <Card
                {...cardProps}
            />);
        expect(screen.getByText(/kWh/i)).toBeInTheDocument();
    });

});