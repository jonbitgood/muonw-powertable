<script lang="ts">
import data from '../../../data/jobs.json';
import PowerTable from '$lib/components/PowerTable.svelte';
import type { Data, Instructs, Options } from '$lib/components/PowerTable.svelte';

let ptOptions1: Options = {
    uniquePrefix: 'pt1',
    rowsPerPageOptions: [3,5,7],
    rowsPerPage: 3,
    headerFilters: false,
    footerText: false,
    currentPage: 5,
    segments: {
        'myTopSegment': ['dropdown', 'pagination', 'stats'],
        'myTable': ['table'],
    }
}

let ptInstructs2: Instructs[] = [
    {key: 'id'},
    {key: 'first_name'},
    {key: 'last_name'},
    {key: 'company'},
    {key: 'department'},
    {key: 'job', parseAs: 'unsafe-html'}
];

let ptOptions2: Options = {
    uniquePrefix: 'pt2',
    userFunctions: {
        customParse: addEmoji
    },
    translations: {
        locale: 'zh',
        numeralFormatter: new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec"),
        search: '搜索',
        next: '下一个',
        previous: '以前的',
        rows: '行数',
        filterBy: '过滤',
        selectAll: '全选',
        selectNone: '选择无',
        invertSelection: '反转选择',
        add: '添加',
        delete: '删除',
        of: '的',
        from: '从'
    },
}

function addEmoji(pageData: Data[]) {
    pageData.forEach(row => {
        let emoji = '';

        if (row['job'].match(/(Engineer|Manage|Admin)/i)) {
            emoji = '💼';
        }
        else if (row['job'].match(/(Health|Pharmacist|Nurse)/i)) {
            emoji = '‍💊';
        }
        else if (row['job'].match(/(Data|Programmer)/i)) {
            emoji = '💻';
        }

        row['job'] = emoji ? `<b>${emoji} ${row['job']}</b>` : row['job'];
    });

    return pageData;
}
</script>


<div class="ex3_style1">
    <PowerTable
        ptData={data}
        ptOptions={ptOptions1}
    />
</div>

<br>
<hr color="#ccc">
<br>

<div class="ex3_style1">
    <PowerTable
        ptData={data}
        ptInstructs={ptInstructs2}
        ptOptions={ptOptions2}
    />
</div>


<style>
:global(.ex3_style1 div[data-prefix=pt1] div[data-name=myTopSegment]) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.5rem 0;
}
:global(.ex3_style1 div[data-prefix=pt1] div[data-name=stats-container]) {
    margin: 0;
}
</style>