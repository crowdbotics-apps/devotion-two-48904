import axios from "axios"
const devotiontwoAPI = axios.create({
  baseURL: "https://devotion-two-48904.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return devotiontwoAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_devotions_list(payload) {
  return devotiontwoAPI.get(`/api/v1/devotions/`)
}
function api_v1_devotions_create(payload) {
  return devotiontwoAPI.post(`/api/v1/devotions/`, payload)
}
function api_v1_devotions_retrieve(payload) {
  return devotiontwoAPI.get(`/api/v1/devotions/${payload.id}/`)
}
function api_v1_devotions_update(payload) {
  return devotiontwoAPI.put(`/api/v1/devotions/${payload.id}/`, payload)
}
function api_v1_devotions_partial_update(payload) {
  return devotiontwoAPI.patch(`/api/v1/devotions/${payload.id}/`, payload)
}
function api_v1_devotions_destroy(payload) {
  return devotiontwoAPI.delete(`/api/v1/devotions/${payload.id}/`)
}
function api_v1_devotions_user_devotions_list(payload) {
  return devotiontwoAPI.get(`/api/v1/devotions/user-devotions/`)
}
function api_v1_devotions_user_devotions_create(payload) {
  return devotiontwoAPI.post(`/api/v1/devotions/user-devotions/`, payload)
}
function api_v1_devotions_user_devotions_retrieve(payload) {
  return devotiontwoAPI.get(`/api/v1/devotions/user-devotions/${payload.id}/`)
}
function api_v1_devotions_user_devotions_update(payload) {
  return devotiontwoAPI.put(
    `/api/v1/devotions/user-devotions/${payload.id}/`,
    payload
  )
}
function api_v1_devotions_user_devotions_partial_update(payload) {
  return devotiontwoAPI.patch(
    `/api/v1/devotions/user-devotions/${payload.id}/`,
    payload
  )
}
function api_v1_devotions_user_devotions_destroy(payload) {
  return devotiontwoAPI.delete(
    `/api/v1/devotions/user-devotions/${payload.id}/`
  )
}
function api_v1_devotions_user_devotions_favorites_list(payload) {
  return devotiontwoAPI.get(`/api/v1/devotions/user-devotions/favorites/`)
}
function api_v1_devotions_user_devotions_favorites_retrieve(payload) {
  return devotiontwoAPI.get(
    `/api/v1/devotions/user-devotions/favorites/${payload.id}/`
  )
}
function api_v1_devotions_user_devotions_favorites_update(payload) {
  return devotiontwoAPI.put(
    `/api/v1/devotions/user-devotions/favorites/${payload.id}/`,
    payload
  )
}
function api_v1_devotions_user_devotions_favorites_partial_update(payload) {
  return devotiontwoAPI.patch(
    `/api/v1/devotions/user-devotions/favorites/${payload.id}/`,
    payload
  )
}
function api_v1_login_create(payload) {
  return devotiontwoAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return devotiontwoAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return devotiontwoAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return devotiontwoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return devotiontwoAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return devotiontwoAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_devotions_list,
  api_v1_devotions_create,
  api_v1_devotions_retrieve,
  api_v1_devotions_update,
  api_v1_devotions_partial_update,
  api_v1_devotions_destroy,
  api_v1_devotions_user_devotions_list,
  api_v1_devotions_user_devotions_create,
  api_v1_devotions_user_devotions_retrieve,
  api_v1_devotions_user_devotions_update,
  api_v1_devotions_user_devotions_partial_update,
  api_v1_devotions_user_devotions_destroy,
  api_v1_devotions_user_devotions_favorites_list,
  api_v1_devotions_user_devotions_favorites_retrieve,
  api_v1_devotions_user_devotions_favorites_update,
  api_v1_devotions_user_devotions_favorites_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
