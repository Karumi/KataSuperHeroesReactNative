window.addEventListener = jest.fn();

jest.mock("../super-heroes-list/components/images/images", () => {
    return {
        default: {
            avengersBadge: "avengersBadge"
        }
    }
});