<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img src="../assets/logo.svg" alt="MK" />
        </div>
        <div class="cursor"></div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons"
                    ><img src="../assets/arrow.svg"
                /></span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link to="/" class="button">
                <span class="material-icons"
                    ><img src="../assets/home.svg"
                /></span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/skills" class="button">
                <span class="material-icons"
                    ><img src="../assets/code.svg"
                /></span>
                <span class="text">Skills</span>
            </router-link>
            <router-link to="/technologies" class="button">
                <span class="material-icons"
                    ><img src="../assets/tools.svg"
                /></span>
                <span class="text">Technologies</span>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <a
                v-on:click="
                    {
                        {
                            Telegram();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/telegram.svg"
                /></span>
                <span class="text">Telegram</span>
            </a>
            <a
                v-on:click="
                    {
                        {
                            Whatsapp();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/whatsapp.svg"
                /></span>
                <span class="text">Whatsapp</span>
            </a>
            <a
                v-on:click="
                    {
                        {
                            Linkedin();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/linkedin.svg"
                /></span>
                <span class="text">Linkedin</span>
            </a>
            <a
                v-on:click="
                    {
                        {
                            Instagram();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/instagram.svg"
                /></span>
                <span class="text">Instagram</span>
            </a>
            <a
                v-on:click="
                    {
                        {
                            Facebook();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/facebook.svg"
                /></span>
                <span class="text">Facebook</span>
            </a>
            <a
                v-on:click="
                    {
                        {
                            Github();
                        }
                    }
                "
                class="button"
            >
                <span class="material-icons"
                    ><img src="../assets/gitprofile.svg" />
                </span>
                <span class="text">Github</span>
            </a>
        </div>
    </aside>
</template>

<script setup>
import { ref } from "vue";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

//
<script>
export default {
    methods: {
        Github() {
            window.open("https://github.com/mukunthan7");
        },
        Whatsapp() {
            window.open("https://wa.me/+919629175812");
        },
        Linkedin() {
            window.open("https://www.linkedin.com/in/m-mukunthan-577bb31a0/");
        },
        Instagram() {
            window.open("https://www.instagram.com/mukunthan7_official/");
        },
        Facebook() {
            window.open("https://www.facebook.com/mukunthanvisvakarma");
        },
        Telegram() {
            window.open("https://t.me/MukunthanMass");
        },
    },
};
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    font-family: "Indie Flower", cursive;
    padding: 1rem;
    transition: 0.2s ease-in-out;
    .flex {
        flex: 1 1 0%;
    }
    .logo {
        margin-bottom: 1rem;
        img {
            width: 2rem;
        }
    }
    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;
        .menu-toggle {
            transition: 0.2s ease-in-out;
            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }
    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    .menu {
        margin: 0 -1rem;
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;
            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            &:hover {
                background-color: var(--dark-alt);
                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);
                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }
    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }
    &.is-expanded {
        width: var(--sidebar-width);
        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }
        h3,
        .button .text {
            opacity: 1;
        }
        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
        .footer {
            opacity: 0;
        }
    }
    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
    .cursor {
        z-index: 1;
        position: fixed;
        background: #fff;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        pointer-events: none;
        mix-blend-mode: difference;
        animation: cursor-animation 2s infinite;
        transition: 0.1s;
    }
    @keyframes cursor-animation {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
    .material-icons:hover {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}
</style>
