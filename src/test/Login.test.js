// test/Login.test.js

describe('Authentication', () => {
  test('testing login', async () => {
    const url = 'http://localhost/login'
    let res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      //   body: JSON.stringify(data)
    })

    
    res = await res.json();
    console.log("res: ", res);

    expect(res.status).toBe(200)
    expect(res.data).toBeInstanceOf(Object)
  })
})
