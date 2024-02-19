<script lang="ts">
    import "../app.pcss";
    import * as Menubar from "$lib/components/ui/menubar";
    import {base} from "$app/paths";
    import { onMount } from "svelte";

    onMount(() => {
        document.addEventListener("keydown", (event) => {
            if (event.ctrlKey && event.key == "q"){
                if (window.location.href !== `${base}/blog/cs`){
                    window.location.href = `${base}/blog/cs`;
                }
            }

            if (event.ctrlKey && event.key == "e"){
                if (window.location.href !== `${base}/blog/else`){
                    window.location.href = `${base}/blog/else`;
                }
            }
        })
    });
</script>

<header class="flex justify-center my-3">
    <Menubar.Root>
        <Menubar.Menu>
            <Menubar.Trigger>Home</Menubar.Trigger>
            <Menubar.Content>
                <Menubar.Item>Who I Am</Menubar.Item>
                <Menubar.Item>What I am Working On</Menubar.Item>
                <Menubar.Item>My Background</Menubar.Item>
            </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
            <Menubar.Trigger>Blog</Menubar.Trigger>
            <Menubar.Content>
                <Menubar.Item>
                    <a href={base}/blog/cs>Computer Science</a>
                    <Menubar.Shortcut>Ctrl+Q</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>
                    <a href={base}/blog/else>Whatever Else</a>
                    <Menubar.Shortcut>Ctrl+E</Menubar.Shortcut>
                </Menubar.Item>
            </Menubar.Content>
        </Menubar.Menu>
    </Menubar.Root>
</header>

<div class="bg-slate-700 text-white">
    <slot />
</div>
