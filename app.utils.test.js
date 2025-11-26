import { 
  isValidDateBR, 
  isValidTime, 
  formatDateToBR, 
  formatTime 
} from "../utils";


test("valida datas no formato brasileiro", () => {
  expect(isValidDateBR("20/11/2023")).toBe(true);
  expect(isValidDateBR("99/99/9999")).toBe(false);
});

test("valida horários no formato HH:MM", () => {
  expect(isValidTime("14:30")).toBe(true);
  expect(isValidTime("99:99")).toBe(false);
});

test("formata Date para DD/MM/AAAA e HH:MM", () => {
  const dt = new Date("2023-11-20T14:30:00");
  expect(formatDateToBR(dt)).toBe("20/11/2023");
  expect(formatTime(dt)).toBe("14:30");
});
