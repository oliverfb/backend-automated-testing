const { assert } = require('chai');
const statusService = require("../src/services/status")



describe("Status service", () => {
  it("Get status", async () => {
    const status = {
      name: "Cancelado"
    }

    await statusService.createStatus(status)

    const result = await statusService.getStatus(1)
    assert.include(result, status)
  })
})