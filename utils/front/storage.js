'use client';
export function lsSet(key, value) {
    if (typeof window !== 'undefined') {
        return window.localStorage.setItem('hiretop-' + key, value)
    }
}
export function lsGet(key) {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('hiretop-' + key)
    }
}
export function lsDel(key) {
    if (typeof window !== 'undefined') {
        return window.localStorage.deleteItem('hiretop-' + key)
    }
}