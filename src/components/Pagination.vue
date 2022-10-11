<template>
  <div class="py-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end m-0">
        <li class="page-item me-1 disabled">
          <a class="page-link" :class="{'disabled': pagination.currentPage===1}"><i class="bi bi-caret-left-fill"></i></a>
        </li>
        <li class="page-item mx-1" v-for="page in pagination.totalPages" :key="page"
          @click.prevent="updatePage(page)"><a class="page-link" href="#" :class="{'active': page === pagination.currentPage}">{{ page }}</a></li>
        <li class="page-item ms-1">
          <a class="page-link" href="#" :class="{'disabled': pagination.currentPage===pagination.totalPages}"><i class="bi bi-caret-right-fill"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import paginationStore from '@/stores/paginationStore'
import { storeToRefs } from 'pinia'
export default {
  setup () {
    const paginationData = paginationStore()
    const { pagination, currentPageData } = storeToRefs(paginationData)
    const { getPagination, updatePage } = paginationData
    paginationData.getPagination()
    return {
      paginationData, pagination, currentPageData, getPagination, updatePage
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/common/Pagination.scss">

</style>
