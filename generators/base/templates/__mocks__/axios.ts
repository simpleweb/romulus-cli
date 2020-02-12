const mockAxios = jest.genMockFromModule("axios") as any;

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
