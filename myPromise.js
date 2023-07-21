class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.handlers = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.handlers.forEach((handler) => handler.onFulfilled(value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                this.handlers.forEach((handler) => handler.onRejected(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'rejected') {
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onRejected(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'pending') {
            return new MyPromise((resolve, reject) => {
                this.handlers.push({
                    onFulfilled: (value) => {
                        try {
                            const result = onFulfilled(value);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    },
                    onRejected: (reason) => {
                        try {
                            const result = onRejected(reason);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    },
                });
            });
        }
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            let count = 0;

            for (let i = 0; i < promises.length; i++) {
                promises[i]
                    .then((result) => {
                        results[i] = result;
                        count++;

                        if (count === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);
            }
        });
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i]
                    .then(resolve)
                    .catch(reject);
            }
        });
    }
}