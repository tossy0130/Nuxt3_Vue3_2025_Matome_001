<tamplate>

</tamplate>

<script setup lang="ts">


// エラーになる
const TestFunc = (value: any): any => { 
    if(value === '') {
        return ''
    } else {
        return value.substring(0, 5)
    }
}

const TestFuncOk = (value: any): string => {
    if(typeof value === 'string' && value.length >= 10) {
        return value.substring(0, 5)
    } else {
        return '-'
    }
}


const result01 = TestFunc('abcdefg')
const result02 = TestFuncOk('abcdefg')

</script>